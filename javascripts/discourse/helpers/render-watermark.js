const renderWatermarkDataURL = (canvas, settings, data) => {
  const {
    tile_width: width,
    tile_height: height,
    color,
    text_align,
    text_rotation,
    display_text,
    display_text_font,
    display_text_x,
    display_text_y,
    display_username_font,
    display_username_x,
    display_username_y,
    display_timestamp_font,
    display_timestamp_x,
    display_timestamp_y,
  } = settings;

  const { username, timestamp } = data;

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");

  ctx.fillStyle = color;
  ctx.textAlign = text_align;
  ctx.rotate(Math.PI / (180 / parseInt(text_rotation, 10)));

  if (display_text.trim() !== "") {
    ctx.font = display_text_font;
    ctx.fillText(display_text, display_text_x, display_text_y);
  }

  if (username) {
    ctx.font = display_username_font;
    ctx.fillText(username, display_username_x, display_username_y);
  }

  if (timestamp) {
    ctx.font = display_timestamp_font;
    ctx.fillText(timestamp, display_timestamp_x, display_timestamp_y);
  }

  return canvas.toDataURL();
};

export default renderWatermarkDataURL;
