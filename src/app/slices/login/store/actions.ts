import { createActionGroup, props } from "@ngrx/store";
import ICredential from "../../shared/interfaces/ICredential";

export const loginActions = createActionGroup({
    source: '[Login]',
    events: {
        'Send Login Request': props<{credentials: ICredential}>()
    }
});