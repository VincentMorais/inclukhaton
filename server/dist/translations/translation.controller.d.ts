import { ILang } from './LangUtils';
import * as deepl from 'deepl-node';
export declare class TranslationController {
    translate(req: any): Promise<string>;
    deeplAutoTranslation: (textToTranslate: string, lang: ILang) => Promise<deepl.TextResult>;
}
