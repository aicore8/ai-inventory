import { onServerEvent } from "@aicore8/lib/client";
import { CORE } from "@aicore8/shared";
import { screen } from "./screen";
import { weapons } from "./weapons";

// The character left (switch or death screen): close the screen and put the weapon away.
on(CORE.clientPlayerUnloadedEvent, () => {
  screen.close();
  weapons.holster();
});
onServerEvent("ai-core:client:openCharacters", () => screen.close());
