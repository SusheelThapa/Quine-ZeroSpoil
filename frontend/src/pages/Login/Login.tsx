import LoginForm from "@/components/LoginForm";
import Layout from "@/layout/Layout";
import LoginHero from "@/components/LoginHero";

const Login = () => {
  return (
    <Layout className="grid grid-cols-2 w-screen h-screen">
      <LoginHero />
      <LoginForm />
    </Layout>
  );
};

export default Login;
