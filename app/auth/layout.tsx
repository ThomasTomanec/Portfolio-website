const AuthLayout = ({ 
  children
}: { 
  children: React.ReactNode
}) => {
  return ( 
    <div className="bg-midnight-gray h-screen flex items-center justify-center">
      {children}
    </div>
  );
}

export default AuthLayout;