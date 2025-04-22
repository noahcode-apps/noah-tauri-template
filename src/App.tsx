import { RouterProvider } from "react-router-dom";
import { TauriStoreProvider } from "react-tauri-store";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/sonner";
import { STORE_DEFAULT_VALUES } from "./constants/store";
import { router } from "./lib/router";
import { storeFileName } from "./lib/utils";

function App() {
	return (
		<TauriStoreProvider
			filePath={storeFileName()}
			defaultValues={STORE_DEFAULT_VALUES}
		>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<RouterProvider router={router} />
				<Toaster />
			</ThemeProvider>
		</TauriStoreProvider>
	);
}

export default App;
