import '../../data/models/custom_service.dart';
import '../../data/models/project.dart';
import 'app_assets.dart';

abstract class AppConstants {
  static const double appBarHeight = 80;
  static const List<CustomService> services = [
    CustomService(
      service: 'Flutter',
      logo: AppAssets.flutterLogo,
      description:
          'I am a Senior mobile developer. I have experience using Dart and Flutter Framework.',
    ),
    CustomService(
      service: 'IOS',
      logo: AppAssets.swiftLogo,
      description:
          'I am a junior mobile developer specializing in iOS development using Swift and the native framework.',
    ),
  ];
  static const List<Project> projects = [
    Project(
        name: 'Dawaa24',
        description:
            'Medical app that seamlessly connects you to an extensive range of products, essential medications, and nearbypharmacies. Easily pay online The app integrates Stripe for secure payments and Agora for real-time chat, video, andvoice call functionalities, ensuring a smooth and ecient user experience.',
        appStore: "https://testflight.apple.com/join/TmfukHWp",
        imageUrl: [
          "assets/apps/dawaa1.png",
          "assets/apps/dawaa2.png",
          "assets/apps/dawaa3.png"
        ],
        driveUrl:
            "https://drive.google.com/file/d/1lhMxgEvNuPAjU4ij4JA4UjvKUvciG_p0/view?usp=sharing"),
    Project(
      name: 'Takaful Member ',
      description:
          'ABNIC provides specially structured medical insurance plans to meet the specific needs of corporate organizations and individuals in the UAE. Our plans are specifically designed to increase the cost of medical treatment and to protect individuals and their families against Abu Dhabi (HAAD) and the Health Authority of Dubai Health Authority (DHA). We are committed to providing you access to the best medical facilities and help you get back on the road to recovery.',
      appStore: "https://apps.apple.com/us/app/abnic-health-vault/id1491122963",
      googlePlay:
          "https://play.google.com/store/apps/details?id=adntc.mamberapp.net",
      imageUrl: [
        "assets/apps/abnic1.webp",
        "assets/apps/abnic2.webp",
        "assets/apps/abnic3.webp",
      ],
    ),
    Project(
      name: 'iZone Solutions',
      description:
          'Ticketing System for iZone Company to make service request easiest and track ticket progress from creation to completion with Real-time notifications.',
      appStore:
          "https://play.google.com/store/apps/details?id=com.izone.ticketing_system_izon",
      googlePlay:
          "https://play.google.com/store/apps/details?id=com.izone.ticketing_system_izon",
      imageUrl: [
        "assets/apps/izon1.webp",
        "assets/apps/izon2.webp",
        "assets/apps/izon3.webp",
      ],
    ),
    Project(
      name: 'ActionZ',
      description:
          'ActionZ" is a dynamic mobile application that serves as your ultimate guide to a world of exciting events and activities. Discover, plan, and engage in a wide array of experiences, from local happenings to global adventures.',
      googlePlay:
          "https://play.google.com/store/apps/details?id=com.actionZ.project&pli=1",
      imageUrl: [
        "assets/apps/actionz1.webp",
        "assets/apps/actionz2.webp",
        "assets/apps/actionz3.webp",
      ],
    ),
    Project(
      name: 'Infinity',
      description:
          'Infinity Wave is your one-stop shopping destination, making it easy for customers to find and buy their favorite products across various categories. Our mission is simple - to provide you with the best prices and irresistible offers.',
      googlePlay:
          "https://play.google.com/store/apps/details?id=infinity.wave.app&pli=1",
      appStore: "https://apps.apple.com/us/app/infinity-wave/id6478120153",
      imageUrl: [
        "assets/apps/infinity1.webp",
        "assets/apps/infinity2.webp",
        "assets/apps/infinity3.webp",
      ],
    ),
    Project(
      name: 'Quick Order',
      description:
      'Quick Order is a revolutionary mobile application designed to streamline the process of managing pharmaceutical inventory and purchasing for pharmacies',
      googlePlay: "https://play.google.com/store/apps/details?id=pharma.link.app",
      imageUrl: [
        "assets/apps/quickIOrder1.webp",
        "assets/apps/quickIOrder2.webp",
        "assets/apps/quickIOrder3.webp",
      ],
    ),
  ];
}
