import { Request, Response, NextFunction } from "express";
import { linkRepository } from "../Repository/linkRepository";

export const linkController = {
    async getLink(req: Request, res: Response, next: NextFunction) {
        try {
            const link = await linkRepository.getLink(req.params.id);
            if (link){
                res.json(link);
            }
            else res.sendStatus(404);
        } catch (err) {
            next(err);
        }
    },

    async createLink(req: Request, res: Response, next: NextFunction) {
        try {
            const {url} = req.body
            const newLink = await linkRepository.createLink(url);
            res.status(201).json(newLink);
        } catch (err) {
            next(err);
        }
    },

    async updateLink(req: Request, res: Response, next: NextFunction) {
        try {
            const { url } = req.body;
            const updatedLink = await linkRepository.updateLink(req.params.id, url);
            res.json(updatedLink);
        } catch (err) {
            next(err);
        }
    },

    async deleteLink(req: Request, res: Response, next: NextFunction) {
        try {
            const success = await linkRepository.deleteLink(req.params.id);
            if (success) res.sendStatus(204);
            else res.sendStatus(404);
        } catch (err) {
            next(err);
        }
    },

    async getAllLinks(req: Request, res: Response, next: NextFunction) {
        try {
            const links = await linkRepository.getAllLinks();
            res.json(links);
        } catch (err) {
            next(err);
        }
    }
};