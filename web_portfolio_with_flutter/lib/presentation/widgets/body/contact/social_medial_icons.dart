import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:portfolio/core/utils/app_extensions.dart';
import 'package:universal_html/html.dart' as html;

import '../../../../core/utils/app_colors.dart';
import '../../../../core/utils/app_enums.dart';
import '../../../../core/utils/app_styles.dart';
import '../../../../core/utils/social_links.dart';

class SocialMediaIcons extends StatelessWidget {
  const SocialMediaIcons({super.key});

  @override
  Widget build(BuildContext context) {
    return const Wrap(
      children: [
        SocialMediaIconBtn(
          icon: FontAwesomeIcons.facebook,
          link: SocialLinks.facebook,
        ),
        SocialMediaIconBtn(
          icon: FontAwesomeIcons.instagram,
          link: SocialLinks.instagram,
        ),
        SocialMediaIconBtn(
          icon: FontAwesomeIcons.linkedinIn,
          link: SocialLinks.linkedin,
        ),
      ],
    );
  }
}

class SocialMediaIconBtn extends StatelessWidget {
  const SocialMediaIconBtn({super.key, required this.icon, this.link});

  final IconData icon;
  final String? link;

  @override
  Widget build(BuildContext context) {
    return TextButton(
      style: IconButton.styleFrom(
        shape: const CircleBorder(),
        padding: const EdgeInsets.all(15),
      ),
      onPressed: () {
        html.window.open(link!, '_blank');
      },
      child: Icon(
        icon,
        color: AppColors.primaryColor,
        size: 32,
      ),
    );
  }
}

class MobileIconBtn extends StatelessWidget {
  const MobileIconBtn({super.key, required this.icon, required this.phone});

  final String icon;
  final String phone;

  @override
  Widget build(BuildContext context) {
    return TextButton(
      style: IconButton.styleFrom(
        shape: const CircleBorder(),
        padding: const EdgeInsets.all(15),
      ),
      onPressed: () {},
      child: Row(
        children: [
          SvgPicture.asset(
            icon,
          ),
          const SizedBox(width: 10,),
          Text(
            phone,
            style: context.width < DeviceType.mobile.getMaxWidth()
                ? AppStyles.s14
                : AppStyles.s18,
          )
        ],
      ),
    );
  }
}
