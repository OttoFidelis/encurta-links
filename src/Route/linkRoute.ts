import { Router } from "express";
import { linkController } from "../Controller/linkController";

const router = Router();

router.get("/", linkController.getAllLinks);
router.get("/:id", linkController.getLink);
router.post("/", linkController.createLink);
router.patch("/:id", linkController.updateLink); // ou use PUT, se quiser substituir totalmente
router.delete("/:id", linkController.deleteLink);

export default router;
