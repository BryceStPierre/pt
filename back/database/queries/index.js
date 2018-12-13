createTable = (tableName) => {
  return `
    CREATE TABLE ${tableName} (
      item_id SERIAL PRIMARY KEY,
      item_value VARCHAR(255) NULL,
      item_classification VARCHAR(150) NULL,
      item_data_type SMALLINT NOT NULL,
      item_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      item_modified TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
}

dropTable = (tableName) => {
  return `DROP TABLE ${tableName}`
}

module.exports = {
  createTable,
  dropTable
};