CREATE TABLE `gh_users` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1

CREATE TABLE `gh_usersInfo` (
  `idUsersInfo` int(11) NOT NULL AUTO_INCREMENT,
  `adresse` varchar(255) NOT NULL,
  `codePostal` int(11) NOT NULL,
  `numTelephone` int(11) DEFAULT NULL,
  `dateEntreBoite` date NOT NULL,
  `dateDeNaissance` date NOT NULL,
  `typeContrat` varchar(255) NOT NULL,
  `idUser` int(11) NOT NULL,
  PRIMARY KEY (`idUsersInfo`),
  KEY `idUser` (`idUser`),
  CONSTRAINT `gh_usersinfo_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `gh_users` (`idUser`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1



CREATE TABLE gh_activite (
  idActivite INT NOT NULL AUTO_INCREMENT,
  libileActivite VARCHAR(255) NOT NULL,
  dateDebut DATE NOT NULL,
  dateFin DATE NOT NULL,
  typeACtivite VARCHAR(255)NOT NULL,
  validActivite BOOLEAN,
  idUser INT NOT NULL,
  PRIMARY KEY (idActivite),
  FOREIGN KEY (idUser)
  REFERENCES gh_users(idUser)
    ON DELETE CASCADE
) ENGINE=InnoDB;