import { createActionGroup, props } from "@ngrx/store";

export const loginActions = createActionGroup({
    source: '[Login]',
    events: {
        'Send Login Request': props<{credentials: ICredential}>()
    }
});