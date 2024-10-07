const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isMobileScreen: false,
};

const screenSlice = createSlice({
  name: "screen", // nama untuk slice ini
  initialState, // nentuin nilai awal state
  // reducer: objek yang berisi kumpulan reducer yang akan dipakai untuk memperbaharui nilai state
  reducers: {
    setIsMobileScreen: (state, action) => {
      // state.isMobileScreen = action.payload : memperbaharui nilai state isMobileScreen dari nilai yang di kirim dari action.payload
      state.isMobileScreen = action.payload;
    },
  },
});

// export action creator setIsMobileScreen dari screenSlice untuk ngirim action ke store redux dan memicu perubahan state
export const { setIsMobileScreen } = screenSlice.actions;

export default screenSlice.reducer;
