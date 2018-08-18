import { urlErrorSelector } from "../url-error-selector";
import { FORM_SETTINGS } from "../../../../model/form";

describe("url error selector", () => {
    it("should return error if url not valid", () => {
        const url = "https://unsplash.com/wallpaper/1339090/4k-wallpapers";
        const state = {
            form: {
                [FORM_SETTINGS]: {
                    registeredFields: {
                        url: {
                            name: "url",
                            type: "Field",
                            count: 1
                        },
                        interval: {
                            name: "interval",
                            type: "Field",
                            count: 1
                        }
                    },
                    fields: {
                        url: {
                            visited: true,
                            touched: true
                        }
                    },
                    values: {
                        url
                    },
                    anyTouched: true
                }
            }
        };

        const actual = urlErrorSelector(state);
        const expected = "Url not valide";

        expect(actual).toBe(expected);
    });
});
