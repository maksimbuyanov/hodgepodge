import {ResolveOptions} from 'webpack';


export function buildResolvers (): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // позволяет импортировать без указания ему расширения ( import a from "./Nav")
    }
}
