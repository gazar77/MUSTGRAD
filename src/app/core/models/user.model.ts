export interface User {
    id: number;
    name: string;
    email: string;
    role: 'Student' | 'Doctor' | 'Admin';
    department?: 'CS' | 'IS' | 'AI';
}

export interface AuthResponse {
    user: User;
    token: string;
}
