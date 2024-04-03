import { LoginForm } from "@/components/auth/login-form";
import AuthLayout from "../layout";
const LoginPage = () => {
    return (
        <AuthLayout>
            <div className="">
                <LoginForm />
            </div>
        </AuthLayout>
    );
}

export default LoginPage;