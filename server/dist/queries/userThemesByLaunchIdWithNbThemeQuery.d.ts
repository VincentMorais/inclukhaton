import * as mongoose from 'mongoose';
export declare const userThemesByLaunchIdWithNbThemeQuery: (idLaunch: string, nbThemesMax: number, idTeam: string) => ({
    $group: {
        _id: string;
        items: {
            $sum: number;
        };
    };
} | {
    $match: {
        launchId: mongoose.Types.ObjectId;
    };
    $group?: undefined;
} | {
    $group: {
        _id: {
            userId: string;
            launchId: string;
        };
        nbThemePerUser: {
            $sum: number;
        };
    };
    $match?: undefined;
} | {
    $match: {
        nbThemePerUser: {
            $gt: number;
        };
    };
    $group?: undefined;
})[];
