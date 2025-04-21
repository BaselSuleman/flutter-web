import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../../core/utils/app_colors.dart';
import '../../../core/utils/app_enums.dart';
import '../../../core/utils/app_styles.dart';
import '../../blocs/home_bloc/home_bloc.dart';
import 'custom_header_btn.dart';
import 'package:universal_html/html.dart' as html;
import 'package:universal_html/html.dart' as html;

class HorizontalHeaders extends StatelessWidget {
  const HorizontalHeaders({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<HomeBloc, HomeState>(
      builder: (context, state) {
        return Row(
          children: [
            TextButton(
              onPressed: () {
                html.window.open(
                    "https://drive.google.com/file/d/1uPEmtUhejpe0xTHP4Zol9doX1x6iq-rR/view?usp=sharing",
                    '_blank');
              },
              child: Padding(
                padding: const EdgeInsets.symmetric(
                  horizontal: 18,
                  vertical: 26,
                ),
                child: Text(
                  "CV",
                  style: TextStyle(
                    color: AppColors.white,
                    fontSize: 16,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ),
            ),
            Row(
              children: List.generate(
                AppBarHeaders.values.length,
                (index) => CustomHeaderBtn(headerIndex: index),
              ),
            ),
          ],
        );
      },
    );
  }
}
