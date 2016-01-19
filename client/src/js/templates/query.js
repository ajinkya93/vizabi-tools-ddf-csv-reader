exports.queryTemplate = {
  data: {
    reader: 'ddfcsv',
    splash: false
  },
  ui: {
    buttons: ['colors', 'find', 'trails', 'lock', 'size', 'moreoptions', 'fullscreen'],
    dialogs: {
      'popup': ['colors', 'find', 'size', 'moreoptions'],
      'sidebar': ['colors', 'find', 'size'],
      'moreoptions': ['opacity', 'speed', 'axes', 'size', 'colors', 'presentation']
    }
  },
  state: {
    time: {
      start: "1800",
      end: "2015",
      value: "2015",
      step: 1,
      formatInput: "%Y",
      trails: true,
      lockNonSelected: 0,
      adaptMinMaxZoom: false
    },
    entities: {
      dim: "geo",
      show: {
        "geo.cat": ["country"]
      }
    },
    marker: {
      space: ["entities", "time"],
      type: "geometry",
      shape: "circle",
      label: {
        use: "property",
        which: "geo.name"
      },
      axis_y: {
        use: "indicator",
        which: "",//
        scaleType: "linear",
        allow: {
          scales: ["linear", "log"]
        }
      },
      axis_x: {
        use: "indicator",
        which: "",//
        scaleType: "log",
        allow: {
          scales: ["linear", "log"]
        }
      },
      color: {
        use: "property",
        which: "geo.region",
        scaleType: "ordinal",
        allow: {
          names: ["!geo.name"]
        },
        palette: {
          asia: "#FF5872",
          europe: "#FFE700",
          americas: "#7FEB00",
          africa: "#00D5E9",
          _default: "#ffb600"
        }
      },
      size: {
        use: "indicator",
        which: "",//
        scaleType: "linear",
        allow: {
          scales: ["linear", "log"]
        },
        min: .04,
        max: .90
      }
    }
  }
};
