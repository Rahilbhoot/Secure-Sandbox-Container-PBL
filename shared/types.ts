export interface User {
    id: number;
    username: string;
    email: string;
}

export interface VirtualMachine {
    id: number;
    name: string;
    status: 'running' | 'stopped';
    novnc_port: number;
    created_at: string;
}

export type AuthResponse = {
    token: string;
    user: User;
};