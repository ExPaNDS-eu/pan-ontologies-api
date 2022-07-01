import {JSDOM} from 'jsdom';

export const xmlContent = `<?xml version="1.0"?>
<rdf:RDF xmlns="aXML">

    <owl:Class rdf:about="class1">
        <owl:equivalentClass rdf:resource="http://class2/label2"/>
        <obo:IAO_0000115 rdf:datatype="aDescription">a description</obo:IAO_0000115>
        <rdfs:label rdf:datatype="aLabel">label1</rdfs:label>
    </owl:Class>

    <owl:Class rdf:about="http://class2/label2">
        <owl:equivalentClass rdf:resource="class5"/>
        <skos:altLabel rdf:datatype="aSynonym">synonym1</skos:altLabel>
        <skos:altLabel rdf:datatype="aSynonym">synonym2</skos:altLabel>
    </owl:Class>

    <owl:Class rdf:about="class3">
        <rdfs:subClassOf rdf:resource="http://class2/label2"/>
        <rdfs:label rdf:datatype="aLabel">label3</rdfs:label>
        <owl:equivalentClass rdf:resource="class6"/>
        <owl:equivalentClass rdf:resource="class7"/>
        <owl:equivalentClass>
            <owl:Class>
                <owl:intersectionOf rdf:parseType="Collection">
                    <rdf:Description rdf:about="aDescription5"/>
                    <rdf:Description rdf:about="aDescription6"/>
                </owl:intersectionOf>
            </owl:Class>
        </owl:equivalentClass>
    </owl:Class>

</rdf:RDF>`;

const intersectionOf = `<?xml version="1.0"?>
<rdf:RDF xmlns="aXML">

    <owl:Class>
        <owl:intersectionOf rdf:parseType="Collection">
            <rdf:Description rdf:about="aDescription5"/>
            <rdf:Description rdf:about="aDescription6"/>
        </owl:intersectionOf>
    </owl:Class>
    </owl:Class>

</rdf:RDF>`;

export const querySelectorXml = new JSDOM(
  xmlContent,
).window.document.querySelectorAll('owl\\:Class[rdf\\:about]');

export const intersectionOfXml = new JSDOM(
  intersectionOf,
).window.document.querySelectorAll('owl\\:Class');
