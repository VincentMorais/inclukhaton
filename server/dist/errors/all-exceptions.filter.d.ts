import { ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { UserService } from '../user/service/user.service';
import { UserDb } from '../user/entity/user.entity';
export declare class AllExceptionsFilter extends BaseExceptionFilter {
    private readonly userService;
    constructor(userService: UserService);
    sendSentryLog(e: any, method?: string, url?: string, query?: string, params?: string, body?: any, user?: UserDb): void;
    catch(exception: unknown, host: ArgumentsHost): Promise<void>;
}
