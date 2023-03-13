import * as mongoose from 'mongoose';
export declare const userThemesFinishedByThemeIdQuery: (idTheme: string, idTeam: string) => ({
    $group: {
        _id: string;
        items: {
            $sum: number;
        };
    };
} | {
    $match: {
        themeId: mongoose.Types.ObjectId;
        answeredAll: boolean;
    };
    $group?: undefined;
} | {
    $group: {
        _id: {
            userId: string;
        };
    };
    $match?: undefined;
})[];
export declare const userThemesFinishedByThemeIdWithMaybeSomeUsersDuplicateQuery: (idTheme: string, idTeam: string) => ({
    $group: {
        _id: string;
        items: {
            $sum: number;
        };
    };
} | {
    $match: {
        themeId: mongoose.Types.ObjectId;
    };
})[];
