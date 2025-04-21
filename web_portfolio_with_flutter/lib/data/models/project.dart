class Project {
  final String name;
  final List<String> imageUrl;
  final String description;
  final String? githubRepoLink;
  final String? previewLink;
  final String? googlePlay;
  final String? appStore;
  final String? driveUrl;

  const Project({
    required this.name,
    required this.imageUrl,
    required this.description,
    this.githubRepoLink,
    this.previewLink,
    this.googlePlay,
    this.appStore,
    this.driveUrl,
  });
}
