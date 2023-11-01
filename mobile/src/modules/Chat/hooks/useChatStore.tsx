import {useAtom} from 'jotai';
import {chatStoreAtom} from '../../../store/chat';
import {
  setTyper,
  clearTyper as clearTyperStore,
} from '../../../store/chat/slices/typer.slice';
import {
  IMessage,
  addMessage as addMessageStore,
} from '../../../store/chat/slices/message.slice';

export const useChatStore = () => {
  const [state, dispatch] = useAtom(chatStoreAtom);

  const clearTyper = () => dispatch(clearTyperStore());

  const updateTyper = (text: string) => dispatch(setTyper(text));

  const addMessage = (message: IMessage) => dispatch(addMessageStore(message));

  return {state, updateTyper, addMessage, clearTyper};
};
