import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useContext,
  useImperativeHandle,
  useRef,
  useReducer,
} from 'react';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [users, setUser] = useState<[User]>();

  const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users]);

  inputRef.current?.focus();

  function focusOnINput(){
    inputRef.current?.focus();
  }

  return (
    <div className="App">
      <form action="">
        <input type="text" ref={inputRef} />
      </form>
    </div>
  );
}

export default App;
