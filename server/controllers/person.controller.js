import Person from '../models/person';
import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';

export function getPersons(req, res) {
    Person.find().sort('-dateAdded').exec((err, persons) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json({ persons });
    })
}

export function addPerson(req, res) {
    if (!req.body.person.name || !req.body.person.age) {
        res.status(403).end();
    }

    const newPerson = new Person(req.body.person);


    //lets sanitize inputs

    newPerson.name = sanitizeHtml(newPerson.name);
    newPerson.age = sanitizeHtml(newPerson.age);

    newPerson.cuid = cuid();

    newPerson.save((err, saved) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json({ person: saved });
    })
}

export function getPerson(req, res) {
    Person.findOne({ cuid: req.params.cuid }).exec((err, person) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json({ person });
    })
}

export function deletePerson(req, res) {
    Person.findOne({ cuid: req.params.cuid }).exec((err, person) => {
        if (err) {
            res.status(500).send(err);
        }
        person.remove(() => {
            res.status(200).end();
        })
    })
}