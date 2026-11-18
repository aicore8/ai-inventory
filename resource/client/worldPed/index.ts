import { onStop } from "@aicore8/lib/client";
import { worldPed } from "./worldPed";

onStop(() => worldPed.hide());
