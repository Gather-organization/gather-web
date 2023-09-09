import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'shared/store';

const useRoles = () => {
  const [userRoles, setUserRoles] = useState<string[]>([]);

  const roles = useSelector<RootState>((state) => state.auth.roles);

  useEffect(() => {
    const rolesArray: any[] = roles as string[];
    setUserRoles(rolesArray);
  }, [roles]);

  return { userRoles };
};

export default useRoles;
