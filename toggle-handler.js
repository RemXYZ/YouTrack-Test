exports.httpHandler = {
    endpoints: [
      {
        scope: "app",
        method: "GET",
        path: "toggle",
        handle: (ctx) => {
          // For demonstration purposes, we use an in-memory variable.
          // In production, persist the state appropriately.
          if (global.toggleState === undefined) {
            global.toggleState = false;
          }
          ctx.response.json({ enabled: global.toggleState });
        }
      },
      {
        scope: "app",
        method: "POST",
        path: "toggle",
        handle: (ctx) => {
          try {
            const { enabled } = ctx.request.body;
            global.toggleState = enabled;
            ctx.response.json({ success: true });
          } catch (e) {
            ctx.response.json({ success: false, error: e.message });
          }
        }
      }
    ]
  };
  