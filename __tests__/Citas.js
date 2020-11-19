import Citas from "../js/classes/Citas";

describe("Test Citas class", () => {
  const citas = new Citas();
  const id = "2";
  test("should add new Cita", () => {
    const citaObj = {
      mascota: "Hok",
      propietario: "Kevin",
      telefono: "87892400",
      fecha: "10-2-2020",
      hora: "10:12",
      sintomas: "Saludable",
    };

    citaObj.id = id;

    citas.agregarCita(citaObj);

    expect(citas).toMatchSnapshot();
  });

  test("should update cita", () => {
    const citaUpdated = {
      id,
      mascota: "Hook",
      propietario: "Kevin",
      telefono: "87892400",
      fecha: "10-2-2020",
      hora: "10:12",
      sintomas: "Saludable",
    };

    citas.editarCita(citaUpdated);

    expect(citas).toMatchSnapshot();
  });

  test("should delete Cita", () => {
    citas.eliminarCita(id);
    expect(citas).toMatchSnapshot();
  });
});
