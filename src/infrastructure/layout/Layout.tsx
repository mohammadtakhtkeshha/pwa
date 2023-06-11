import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Unauthorized , Authorized} from 'infrastructure';

export default function Layout() {
    const [tokens, setTokens] = useState<Boolean>(false)
  return (
    <Routes>
      {tokens ? (
        <Route path='/*' element={<Authorized />} />
      ) : (
        <Route path='/*' element={<Unauthorized />} />
      )}
    </Routes>
  );
}
