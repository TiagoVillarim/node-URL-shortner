import { prop, getModelForClass } from '@typegoose/typegoose';
import * as mongoose from 'mongoose';

export class URL {
    @prop({ required: true})
    hash: string | undefined

    @prop({required: true})
    originURl:string | undefined

    @prop({ required: true})
    shortURL: string | undefined
    getModelForClass: any;
};

export const URLmodel = new URL().getModelForClass(URL)