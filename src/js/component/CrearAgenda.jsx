import React from "react";

const CrearAgenda = () => {
  return (
    <form>
      <div className="mb-3">
        <label for="nombreAgenda" className="form-label">
          Nombre Agenda Nueva:
        </label>
        <input
          type="text"
          className="form-control"
          id="nombreAgenda"
          aria-describedby="nameHelp"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Crear Agenda!
      </button>
    </form>
  );
};

export default CrearAgenda;
