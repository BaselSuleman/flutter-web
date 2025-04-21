import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:mailer/mailer.dart';
import 'package:mailer/smtp_server.dart';

import '../../../../core/utils/app_colors.dart';
import '../../../../core/utils/app_enums.dart';
import '../../../../core/utils/app_extensions.dart';
import '../../../../core/utils/app_styles.dart';
import '../../../../core/widgets/custom_button.dart';

class ContactForm extends StatefulWidget {
  const ContactForm({super.key});

  @override
  State<ContactForm> createState() => _ContactFormState();
}

class _ContactFormState extends State<ContactForm> {
  late GlobalKey<FormState> _formKey;
  late TextEditingController _emailController;
  late TextEditingController _messageController;
  late TextEditingController _nameController;
  late TextEditingController _subjectController;

  @override
  void initState() {
    super.initState();
    _formKey = GlobalKey();
    _emailController = TextEditingController();
    _messageController = TextEditingController();
    _nameController = TextEditingController();
    _subjectController = TextEditingController();
  }

  @override
  void dispose() {
    _emailController.dispose();
    _messageController.dispose();
    _nameController.dispose();
    _subjectController.dispose();
    super.dispose();
  }

  Future<void> _sendEmail() async {
    final String username = dotenv.env['EMAIL_USERNAME']!;
    final String password = dotenv.env['EMAIL_PASSWORD']!;

    final smtpServer = gmail(username, password);
    final message = Message()
      ..from = Address(username, 'Your Name')
      ..recipients.add(_emailController.text)
      ..subject = _subjectController.text
      ..text = 'Name: ${_nameController.text}\n\nMessage: ${_messageController.text}';

    try {
      await send(message, smtpServer);
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Email sent successfully!')),
      );
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Failed to send email: $e')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: _getFormWidth(context.width),
      child: Form(
        key: _formKey,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            TextFormField(
              controller: _nameController,
              style: AppStyles.s14,
              decoration: const InputDecoration(labelText: 'Name'),
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return 'Please enter your name';
                }
                return null;
              },
            ),
            const SizedBox(height: 12),
            TextFormField(
              controller: _emailController,
              style: AppStyles.s14,
              decoration: const InputDecoration(labelText: 'E-mail'),
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return 'Please enter your email';
                } else if (!RegExp(r'^\S+@\S+\.\S+$').hasMatch(value)) { // Corrected regex
                  return 'Please enter a valid email address';
                }
                return null;
              },
            ),
            const SizedBox(height: 12),
            TextFormField(
              controller: _subjectController,
              style: AppStyles.s14,
              decoration: const InputDecoration(labelText: 'Subject'),
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return 'Please enter a subject';
                }
                return null;
              },
            ),
            const SizedBox(height: 12),
            TextField(
              controller: _messageController,
              maxLines: 5,
              style: AppStyles.s14,
              decoration: const InputDecoration(
                labelText: 'Type a message here...',
              ),
            ),
            const SizedBox(height: 16),
            CustomButton(
              label: 'Submit',
              onPressed: () {
                if (_formKey.currentState?.validate() ?? false) {
                  _sendEmail();
                }
              },
              backgroundColor: AppColors.primaryColor,
              width: _getFormWidth(context.width),
            ),
          ],
        ),
      ),
    );
  }

  double _getFormWidth(double deviceWidth) {
    if (deviceWidth < DeviceType.mobile.getMaxWidth()) {
      return deviceWidth;
    } else if (deviceWidth < DeviceType.ipad.getMaxWidth()) {
      return deviceWidth / 1.6;
    } else if (deviceWidth < DeviceType.smallScreenLaptop.getMaxWidth()) {
      return deviceWidth / 2;
    } else {
      return deviceWidth / 2.5;
    }
  }
}
