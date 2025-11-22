import multer from 'multer';

const storage = multer.memoryStorage(); 

const upload = multer({
    storage,
    limits: { fileSize: 1024 * 1024 * 200 }, // 200MB
    fileFilter: (req, file, cb) => {
        const allowed = [
            'video/mp4',
            'video/mov',
            'image/png',
            'image/jpeg',
            'application/pdf'
        ];

        if (!allowed.includes(file.mimetype)) {
            return cb(new Error('Unsupported file type'), false);
        }

    cb(null, true);
}});

export default upload;
