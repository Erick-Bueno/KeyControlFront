import { LoginStats } from "@enums/login-stats";
import { LoginResponse } from "../responses/login-response";

export interface LoginState {
    user: LoginResponse,
    errors: '' | null
    status: LoginStats
}