import 'package:flutter/material.dart';
import 'package:portfolio/data/models/project.dart';

import '../../../../core/utils/app_colors.dart';
import '../../../../core/widgets/custom_button.dart';
import 'package:universal_html/html.dart' as html;

class ProjectActions extends StatelessWidget {
  const ProjectActions({super.key, required this.project});

  final Project project;

  @override
  Widget build(BuildContext context) {
    return Flexible(
      fit: FlexFit.tight,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          if (project.previewLink != null)
            Expanded(
              child: CustomButton(
                label: 'Preview',
                backgroundColor: AppColors.primaryColor,
                onPressed: () {
                  html.window.open(project.previewLink!, '_blank');
                },
              ),
            ),
          if (project.githubRepoLink != null) ...[
            if (project.previewLink != null) const SizedBox(width: 18),
            Expanded(
              child: CustomButton(
                label: 'Github',
                borderColor: AppColors.primaryColor,
                onPressed: () {
                  html.window.open(project.githubRepoLink!, '_blank');
                },
              ),
            ),
          ],
          if (project.googlePlay != null) ...[
            if (project.previewLink != null || project.githubRepoLink != null)
              const SizedBox(width: 18),
            Expanded(
              child: CustomButton(
                label: 'play store',
                borderColor: AppColors.primaryColor,
                onPressed: () {
                  html.window.open(project.googlePlay!, '_blank');
                },
              ),
            ),
          ],
          // if (project.previewLink == null &&
          //     project.githubRepoLink == null &&
          //     project.googlePlay == null)
          //   Expanded(
          //     child: CustomButton(
          //       label: 'No actions available',
          //       borderColor: AppColors.primaryColor,
          //       onPressed: () {},
          //     ),
          //   ),
          if (project.driveUrl != null)
            Expanded(
              child: CustomButton(
                label: 'Download Apk',
                borderColor: AppColors.primaryColor,
                onPressed: () {
                  html.window.open(project.driveUrl!, '_blank');
                },
              ),
            ),
          if (project.appStore != null)
            const SizedBox(
              width: 20,
            ),
          if (project.appStore != null)
            Expanded(
              child: CustomButton(
                label: 'App Store',
                borderColor: AppColors.primaryColor,
                onPressed: () {
                  html.window.open(project.appStore!, '_blank');
                },
              ),
            )
        ],
      ),
    );
  }
}
