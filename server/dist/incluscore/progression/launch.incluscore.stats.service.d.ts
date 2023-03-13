import { Aggregate, Model } from 'mongoose';
import { LaunchIncluscoreDb, LaunchIncluscoreDocument } from '../entities/launch.incluscore.entity';
import { UserThemeIncluscoreDb } from '../entities/userTheme.entity';
import { IncluscoreDb } from '../entities/incluscore.entity';
import { UserAnswerIncluscoreDb } from '../entities/userAnswer.entity';
interface UserThemeByThemeStatRequest {
    idLaunch: string;
    idTheme: string;
}
interface UserThemeByQuestionStatRequest {
    idLaunch: string;
    idTheme: string;
    idQuestion: string;
}
interface UserThemeByPropositionStatRequest {
    idLaunch: string;
    idTheme: string;
    idQuestion: string;
    idProposition: string;
}
interface UserThemeByIdQuestionFacetResults {
    goodAnswersCountByQuestionIdQuery: number;
    badAnswersCountByQuestionIdQuery: number;
}
interface UserThemeByIdPropositionFacetResults {
    propositionChosenCount: number;
}
interface UserThemeByIdThemeFacetResults {
    scoreMax: number;
    nbQuestion: number;
    averageScore: number;
    haveFinishedThemeCount: number;
    finishedThemeDuplicateCount: number;
    goodAnswersCountByThemeIdQuery: number;
    badAnswersCountByThemeIdQuery: number;
}
export interface SingleQuestionStat extends UserThemeByQuestionStatRequest {
    userQuestionsStats: UserThemeByIdQuestionFacetResults;
    propositionsStats?: SinglePropositionStat[];
}
export interface SinglePropositionStat extends UserThemeByPropositionStatRequest {
    idProposition: string;
    idQuestion: string;
    userPropositionsStats: UserThemeByIdPropositionFacetResults;
}
export interface SingleThemeStat extends UserThemeByThemeStatRequest {
    userThemesStats: UserThemeByIdThemeFacetResults;
    questionsStats?: SingleQuestionStat[];
}
interface UserThemeByIdLaunchFacetResults {
    scoreMax: number;
    nbThemes: number;
    nbQuestion: number;
    averageScore: number;
    anormalUsers: number;
    begunThemesCount: number;
    finishedThemesCount: number;
    anormalAnswersCount: number;
    allAnswersOfThisLaunchWithoutConditionCount: number;
    anormalCountOfAnswers: number;
    totalUsers: number;
    usersWhoFinishedAllThemes: number;
    usersWithAtLeastOneAnswerCount: number;
}
export interface StatsMainObject {
    idLaunch: string;
    userThemesStats: UserThemeByIdLaunchFacetResults;
    themesStats: SingleThemeStat[];
}
export declare class LScrStatService {
    private readonly launchScrDb;
    private readonly userThemeIncluscoreDb;
    private readonly userAnswerIncluscoreDb;
    constructor(launchScrDb: Model<LaunchIncluscoreDocument>, userThemeIncluscoreDb: Model<UserThemeIncluscoreDb>, userAnswerIncluscoreDb: Model<UserAnswerIncluscoreDb>);
    static currentIdLaunch: string | null;
    static currentIdTheme: string | null;
    static currentIdQuestion: string | null;
    static currentIdProposition: string | null;
    static currentIncluscore: IncluscoreDb | null;
    static currentIdTeam: string | null;
    processAggregateResult(aggregate: Aggregate<any>[]): any;
    allAnswersStatsByPropositionId(): Promise<SinglePropositionStat>;
    allUserThemesStatByQuestionId(): Promise<SingleQuestionStat>;
    allUserThemesStatByThemeId(): Promise<SingleThemeStat>;
    allUserThemesStatByLaunchId(): Promise<UserThemeByIdLaunchFacetResults>;
    getAdminCompanyIncluscoresStats(launch: LaunchIncluscoreDb, idTeam?: string): Promise<StatsMainObject>;
}
export {};
