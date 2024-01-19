import { db } from "../connection";

export const getCountries = async () => {
  return await db.query("SELECT * FROM Country");
};

export async function getContryById(id: number) {
  return await db.any("SELECT * FROM Country WHERE id = $1", [id]);
}

export const saveCountry = async (country: any) => {
  return await db.one(
    "INSERT INTO Country(name, population, capital) " + "VALUES ($1, $2, $3)",
    [country.name, country.population, country.capital]
  );
};

export const updateCountry = async (id: number, country: any) => {
  return await db.one(
    "UPDATE Country SET name = $1, population = $2, capital = $3" +
      "WHERE id = $4",
    [country.name, country.population, country.capital, id]
  );
};

export const deleteCountry = async (id: number) => {
  return await db.any("DELETE FROM Country WHERE id = $1", [id]);
};
