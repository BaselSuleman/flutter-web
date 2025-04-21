import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';

import '../../../../core/utils/app_colors.dart';

class ProjectImage extends StatelessWidget {
  const ProjectImage({super.key, required this.imageUrl});

  final String imageUrl;

  @override
  Widget build(BuildContext context) {
    return Flexible(
      flex: 2,
      fit: FlexFit.tight,
      child: Image.asset(
        imageUrl,
        fit: BoxFit.contain,
        height: 200,
        width: 200,
      ),
    );
  }
}
