import multer from 'multer';

const storage = multer.memoryStorage();
export const multerUpload = multer({ storage: storage });
