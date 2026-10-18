import blogImage from "../assets/blog.png";
import fileUploaderImage from "../assets/file-uploader.png";
import shoppingWebsiteImage from "../assets/shopping-website.png";

const TAGS = {
  REACT: "React",
  JAVA_SCRIPT: "JavaScript",
  PYTORCH: "PyTorch",
  PYTHON: "Python",
  NODEJS: "Node.js",
  EXPRESS: "Express.js",
  POSTGRESQL: "PostgreSQL",
  PRISMA: "Prisma ORM",
  JWT: "JWTs",
};

export const projectData = [
  {
    title: "Modifications to SpotLessSplats",
    description:
      "Modifications include: U-Net for Mask prediction, per-gaussian embeddings, depth regularization with DA3 and augmenting training images with Difix 3D+.",
    tags: [TAGS.PYTORCH, TAGS.PYTHON],
    source: "https://github.com/BenediktRott/SpotLessSplats",
  },
  {
    title: "Shopping Website",
    description:
      "Simple front-end only shopping SPA made with React + Vite. Part of the odin project curriculum",
    tags: [TAGS.REACT, TAGS.JAVA_SCRIPT],
    source: "https://github.com/BenediktRott/shopping-website",
    image: shoppingWebsiteImage,
  },
  {
    title: "Modifications to RiboNet",
    description:
      "Making RiboNet compatible with 5PSeq data. Part of a group project.",
    tags: [TAGS.PYTORCH, TAGS.PYTHON],
  },
  {
    title: "Personal Blog",
    description:
      "Simple full-stack Personal Blog, using React + Vite, Express.js, PostgreSQL + Prisma and JWTs for authentication. Part of the odin project curriculum.",
    tags: [TAGS.REACT, TAGS.EXPRESS, TAGS.POSTGRESQL, TAGS.PRISMA, TAGS.JWT],
    source: "https://github.com/BenediktRott/personal-blog",
    image: blogImage,
  },
  {
    title: "File Uploader",
    description:
      "Google-drive-like website made with Express.js, Prisma and EJS and cloudinary for storage. Part of the odin project curriculum.",
    tags: [TAGS.EXPRESS, TAGS.PRISMA],
    source: "https://github.com/BenediktRott/file-uploader",
    image: fileUploaderImage,
  },
];
