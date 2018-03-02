import { Router } from 'express';
import peopleRouter from './people';
import blogRouter from "./blogs";

let router = Router();

router.use('/people', peopleRouter);
router.use("/blogs", blogRouter);

export default router;