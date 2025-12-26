# ...existing code...
import importlib, sys
try:
    # preferred: relative import when used as a package
    from .database import Base
except Exception:
    try:
        # fallback: absolute import when run as a script
        Base = importlib.import_module("backend.database").Base
    except Exception:
        # last resort: try direct module name
        Base = importlib.import_module("database").Base
# ...existing code...