import {useAtom} from 'jotai';
import {chatStoreAtom} from '../../../store/chat';
import {setTyper} from '../../../store/chat/slices/typer.slice';

export const useChatStore = () => {
  const [state, dispatch] = useAtom(chatStoreAtom);

  const updateTyper = (text: string) => dispatch(setTyper(text));

  return {state, updateTyper};
};
