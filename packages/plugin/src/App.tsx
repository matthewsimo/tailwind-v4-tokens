import { useCallback, useEffect, useState } from "react";
import { postToFigma, UIPostMessage } from "./common/msg";
import { useAppState, useDispatch } from "./hooks/appContext";
import { LogElement } from "./components/logger";
import { Button } from "./ui/components/button";
import { Info, Loader2 } from "lucide-react";
import { waitFor } from "./common/utils";

function App() {
  const dispatch = useDispatch();

  const { initialized } = useAppState();
  const handleMessage = useCallback(
    (msg: UIPostMessage) => {
      true && console.log({ handleMessage: true, msg });

      dispatch({
        type: "UPDATE_FIGMA_DATA",
        payload: {
          ...msg.data.pluginMessage,
        },
      });
      dispatch({
        type: "SET_LOADING",
        payload: {
          isLoading: false,
        },
      });

      if (!initialized) {
        dispatch({
          type: "SET_INITIALIZED",
        });
      }
    },
    [dispatch, initialized],
  );

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [handleMessage]);

  const handleCreate = async () => {
    postToFigma({ type: "createTokens" });
    setClicked(true);
    await waitFor(300);
    setClicked(false);
  };

  const [clicked, setClicked] = useState(false);

  return (
    <LogElement>
      <main className="space-y-4 p-4">
        <h1>Tailwind Tokens</h1>
        {clicked && (
          <Button className="w-full flex gap-2 opacity-80" disabled>
            <Loader2 className="size-6 animate-spin" />
            Generating..
          </Button>
        )}
        {!clicked && (
          <Button className="w-full flex" onClick={handleCreate}>
            Generate Figma Token Collection
          </Button>
        )}
        <div className="bg-gray-50/10 py-3 px-2 flex gap-2 rounded-lg">
          <Info className="size-6" />

          <p className="font-medium">
            This will create a new Figma Variable Collection named 'Tailwind'
            and all initial tokens.
          </p>
        </div>
      </main>
    </LogElement>
  );
}

export default App;
