
export default class Url{
    private url:string;

    constructor(url: string) {
        if (!this.isValidUrl(url)) {
            throw new Error("URL inválido");
        }
        else
        this.url=url
    }
    private isValidUrl(url: string): boolean {
        const urlRegex = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i;
        return urlRegex.test(url);
    }
    public getUrl():string{
        return this.url
    }
}