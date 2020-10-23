--
-- This SQL script builds a monopoly database, deleting any pre-existing version.
--
-- @author kvlinden
-- @version Summer, 2015
-- Updated by Ben DeVries CS 262 Lab 07, Fall 2020
--

-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.
DROP TABLE IF EXISTS PlayerGameProperty;
DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;
DROP TABLE IF EXISTS Property;

-- Create the schema.
CREATE TABLE Game (
	ID integer PRIMARY KEY, 
	time timestamp
	);

CREATE TABLE Player (
	ID integer PRIMARY KEY, 
	emailAddress varchar(50) NOT NULL,
	name varchar(50)
	);

CREATE TABLE Property (
  ID integer PRIMARY KEY,
  name varchar(50) NOT NULL,
  spaceOnBoard integer NOT NULL
  ); 

CREATE TABLE PlayerGame (
	gameID integer REFERENCES Game(ID), 
	playerID integer REFERENCES Player(ID),
	score integer
	);

CREATE TABLE PlayerGameProperty (
  gameID integer REFERENCES Game(ID),
  playerID integer REFERENCES Player(ID),
  propertyID integer REFERENCES Property(ID),
  numHouses integer CHECK (numHouses <= 4),
  hasHotel boolean
  );

-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON Property TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;
GRANT SELECT ON PlayerGameProperty TO PUBLIC;

-- Add sample records.
INSERT INTO Game VALUES (1, '2006-06-27 08:00:00');
INSERT INTO Game VALUES (2, '2006-06-28 13:20:00');
INSERT INTO Game VALUES (3, '2006-06-29 18:41:00');

INSERT INTO Player(ID, emailAddress) VALUES (1, 'me@calvin.edu');
INSERT INTO Player VALUES (2, 'king@gmail.edu', 'The King');
INSERT INTO Player VALUES (3, 'dog@gmail.edu', 'Dogbreath');

INSERT INTO Property VALUES(1, 'Mediteranean Avenue', 1);
INSERT INTO Property VALUES(2, 'Baltic Avenue', 3);
INSERT INTO Property VALUES(3, 'Oriental Avenue', 6);
INSERT INTO Property VALUES(4, 'Vermont Avenue', 8);
INSERT INTO Property VALUES(5, 'Connecticut Avenue', 9);

INSERT INTO PlayerGame VALUES (1, 1, 0.00);
INSERT INTO PlayerGame VALUES (1, 2, 0.00);
INSERT INTO PlayerGame VALUES (1, 3, 2350.00);
INSERT INTO PlayerGame VALUES (2, 1, 1000.00);
INSERT INTO PlayerGame VALUES (2, 2, 0.00);
INSERT INTO PlayerGame VALUES (2, 3, 500.00);
INSERT INTO PlayerGame VALUES (3, 2, 0.00);
INSERT INTO PlayerGame VALUES (3, 3, 5500.00);

INSERT INTO PlayerGameProperty VALUES (1, 1, 1, 0, false);
INSERT INTO PlayerGameProperty VALUES (1, 2, 2, 0, false);
INSERT INTO PlayerGameProperty VALUES (1, 2, 3, 2, false);
INSERT INTO PlayerGameProperty VALUES (2, 1, 4, 0, false);
INSERT INTO PlayerGameProperty VALUES (2, 2, 3, 3, false);
INSERT INTO PlayerGameProperty VALUES (3, 1, 2, 0, false);
INSERT INTO PlayerGameProperty VALUES (3, 1, 1, 0, true);
INSERT INTO PlayerGameProperty VALUES (3, 2, 4, 3, false);
INSERT INTO PlayerGameProperty VALUES (3, 2, 2, 0, false);
INSERT INTO PlayerGameProperty VALUES (3, 3, 3, 1, false);
INSERT INTO PlayerGameProperty VALUES (3, 3, 1, 0, true);
