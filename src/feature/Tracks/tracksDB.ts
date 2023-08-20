import { makeNewId } from "common/helpers"
import { type TTrack } from "./types"

export const tracksDB = {
  title: "tracks",
  keys: { keyPath: "id" },

  index: [
    {
      name: "active",
      options: { unique: false },
    },
    {
      name: "date",
      options: { unique: false },
    },
  ],

  getNew(): TTrack {
    return {
      id: makeNewId(),
      active: true,
      date: new Date().toISOString(),
      startTime: new Date().toISOString(),
      elapsedTime: 0,
      ticket: "",
      ticketTitle: "",
      epic: "",
      comment: "",
      savedJira: false,
    }
  },
}
