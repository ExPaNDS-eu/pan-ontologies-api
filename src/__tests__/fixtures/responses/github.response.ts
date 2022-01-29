export const githubRespone = {
  text: `<?xml version="1.0"?>
<rdf:RDF xmlns="http://purl.org/pan-science/PaNET/PaNET.owl#"
     xml:base="http://purl.org/pan-science/PaNET/PaNET.owl"
     xmlns:obo="http://purl.obolibrary.org/obo/"
     xmlns:owl="http://www.w3.org/2002/07/owl#"
     xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
     xmlns:xml="http://www.w3.org/XML/1998/namespace"
     xmlns:xsd="http://www.w3.org/2001/XMLSchema#"
     xmlns:foaf="http://xmlns.com/foaf/0.1/"
     xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
     xmlns:skos="http://www.w3.org/2004/02/skos/core#"
     xmlns:vann="http://purl.org/vocab/vann/"
     xmlns:PaNET="PaNET:"
     xmlns:terms="http://purl.org/dc/terms/">
    <owl:Ontology rdf:about="http://purl.org/pan-science/PaNET/PaNET.owl">
          <owl:imports rdf:resource="http://purl.org/pan-science/PaNET/PaNET-metadata.owl"/>
    </owl:Ontology>
    
    <!-- 
    ///////////////////////////////////////////////////////////////////////////////////////
    //
    // Annotation properties
    //
    ///////////////////////////////////////////////////////////////////////////////////////
     -->

    


    <!-- http://purl.obolibrary.org/obo/IAO_0000115 -->

    <owl:AnnotationProperty rdf:about="http://purl.obolibrary.org/obo/IAO_0000115"/>
    


    <!-- http://purl.obolibrary.org/obo/IAO_0000119 -->

    <owl:AnnotationProperty rdf:about="http://purl.obolibrary.org/obo/IAO_0000119"/>
    


    <!-- http://purl.org/dc/terms/created -->

    <owl:AnnotationProperty rdf:about="http://purl.org/dc/terms/created"/>
    


    <!-- http://purl.org/dc/terms/creator -->

    <owl:AnnotationProperty rdf:about="http://purl.org/dc/terms/creator"/>
    


    <!-- http://purl.org/dc/terms/license -->

    <owl:AnnotationProperty rdf:about="http://purl.org/dc/terms/license"/>
    


    <!-- http://www.w3.org/2004/02/skos/core#altLabel -->

    <owl:AnnotationProperty rdf:about="http://www.w3.org/2004/02/skos/core#altLabel"/>
    


    <!-- 
    ///////////////////////////////////////////////////////////////////////////////////////
    //
    // Object Properties
    //
    ///////////////////////////////////////////////////////////////////////////////////////
     -->

    


    <!-- PaNET:hasTechnique -->

    <owl:ObjectProperty rdf:about="PaNET:hasTechnique">
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">hasTechnique</rdfs:label>
    </owl:ObjectProperty>
    


    <!-- 
    ///////////////////////////////////////////////////////////////////////////////////////
    //
    // Classes
    //
    ///////////////////////////////////////////////////////////////////////////////////////
     -->

    


    <!-- PaNET:dataset -->

    <owl:Class rdf:about="PaNET:dataset">
        <rdfs:subClassOf rdf:resource="http://www.w3.org/2002/07/owl#Thing"/>
        <obo:IAO_0000115 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">A dataset in the domain of neutron, muon and accelerator-based light sources</obo:IAO_0000115>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">dataset</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.obolibrary.org/obo/CHMO_0000182 -->

    <owl:Class rdf:about="http://purl.obolibrary.org/obo/CHMO_0000182">
        <owl:equivalentClass rdf:resource="http://purl.org/pan-science/PaNET/PaNET01022"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01020"/>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00001 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00001">
        <rdfs:subClassOf rdf:resource="http://www.w3.org/2002/07/owl#Thing"/>
        <obo:IAO_0000115 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">A technique in the domain of neutron, muon and accelerator-based light sources</obo:IAO_0000115>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">photon and neutron technique</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00002 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00002">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00001"/>
        <obo:IAO_0000115 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">A technique defined by its experimental probe type</obo:IAO_0000115>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">defined by experimental probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00003 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00003">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00001"/>
        <obo:IAO_0000115 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">A technique defined by a physical process</obo:IAO_0000115>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">defined by experimental physical process</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00004 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00004">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00001"/>
        <obo:IAO_0000115 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">A technique defined by its functional dependence</obo:IAO_0000115>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">defined by functional dependence</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00005 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00005">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00001"/>
        <obo:IAO_0000115 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">A technique defined by its goal or purpose</obo:IAO_0000115>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">defined by purpose</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00100 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00100">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00002"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">photon probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00101 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00101">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00002"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">neutron probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00102 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00102">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00002"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">muon probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00103 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00103">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00002"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">solid probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00104 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00104">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00002"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">scanning probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00105 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00105">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00002"/>
        <obo:IAO_0000115 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">A technique for which a pulsed probe is essential</obo:IAO_0000115>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">pulsed probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00106 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00106">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00002"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">microfocussed probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00200 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00200">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00003"/>
        <obo:IAO_0000115 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Any phenomenon where a particle of the same type as the probe is emitted</obo:IAO_0000115>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">scattering technique</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00201 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00201">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00003"/>
        <obo:IAO_0000115 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Independent of probe; classed also as scattering if the probe and emitted particles are of the same type; disjoint with elastic scattering</obo:IAO_0000115>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">emission technique</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00202 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00202">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00003"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">absorption technique</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00203 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00203">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00003"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">propagation technique</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">forward scattering technique</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00204 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00204">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00003"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Refraction</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">refraction technique</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00205 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00205">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00003"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Reflection_(physics)</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">reflection technique</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00206 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00206">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00003"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">resonance phenomenon</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00207 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00207">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00003"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">magnetism technique</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00208 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00208">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00003"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">dispersive technique</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00209 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00209">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00003"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">interferometry technique</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00210 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00210">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00003"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">force measurement</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00211 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00211">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00003"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">nonlinear interaction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00300 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00300">
        <owl:equivalentClass rdf:resource="http://purl.org/pan-science/PaNET/PaNET01125"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00004"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">versus energy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00301 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00301">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00004"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">versus momentum transfer</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00302 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00302">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00004"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">versus polarization</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00303 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00303">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00004"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">versus position</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00304 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00304">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00004"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">versus time</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00305 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00305">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00004"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">versus emission mass</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00306 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00306">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00004"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">versus sample state</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00400 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00400">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00005"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">obtain atomic structure</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00401 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00401">
        <owl:equivalentClass rdf:resource="http://purl.org/pan-science/PaNET/PaNET01106"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00004"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00005"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">obtain spatial map</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00402 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00402">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00005"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">obtain electronic ground state properties</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00403 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00403">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00005"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">obtain dynamics</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00404 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00404">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00005"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">therapy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00405 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00405">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00005"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">drug fragment binding</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00406 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00406">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00005"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">obtain internal field</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00407 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00407">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00005"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">characterize excitations</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00408 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00408">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00005"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">manufacturing technique</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00409 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00409">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00005"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">testing</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00410 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00410">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00005"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">medical application</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET00411 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET00411">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00005"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">chiral determination</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01000 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01000">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00105"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">time of flight technique</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">TOF</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01001 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01001">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01000"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">neutron time of flight technique</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01002 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01002">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00105"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">ultrafast probe</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">femtosecond probe</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01003 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01003">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00105"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">single shot technique</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01004 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01004">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00106"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">nanofocussed probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01005 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01005">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00100"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">IR photon probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01006 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01006">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00100"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">THz photon probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01007 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01007">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00100"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">UV visible photon probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01008 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01008">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01007"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">visible photon probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01009 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01009">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01007"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">UV photon probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01010 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01010">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01009"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">VUV photon probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01011 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01011">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01010"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">EUV photon probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01012 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01012">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00100"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01013 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01013">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">hard x-ray probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01014 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01014">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <obo:IAO_0000115 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Energy is between hard and soft x-ray, e.g. sulphur K edge</obo:IAO_0000115>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">tender x-ray probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01015 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01015">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">soft x-ray probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01016 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01016">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00101"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Neutron_temperature#Thermal</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">thermal neutron probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01017 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01017">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01016"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">cold neutron probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01018 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01018">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00101"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">monochromatic neutron probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01019 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01019">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00101"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00105"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">pulsed neutron TOF probe</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01020 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01020">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00200"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Elastic_scattering</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">elastic scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01021 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01021">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01020"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">diffuse scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01022 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01022">
        <owl:equivalentClass rdf:resource="https://www.wikidata.org/wiki/Q133900"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01020"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Diffraction</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01023 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01023">
        <rdfs:subClassOf rdf:resource="http://purl.obolibrary.org/obo/CHMO_0000182"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01022"/>
        <rdfs:subClassOf rdf:resource="https://www.wikidata.org/wiki/Q133900"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Dynamical_theory_of_diffraction</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">dynamical diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01024 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01024">
        <rdfs:subClassOf rdf:resource="http://purl.obolibrary.org/obo/CHMO_0000182"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01022"/>
        <rdfs:subClassOf rdf:resource="https://www.wikidata.org/wiki/Q133900"/>
        <obo:IAO_0000115 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Probe is highly coherent over illuminated sample</obo:IAO_0000115>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">coherent diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01025 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01025">
        <rdfs:subClassOf rdf:resource="http://purl.obolibrary.org/obo/CHMO_0000182"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01022"/>
        <rdfs:subClassOf rdf:resource="https://www.wikidata.org/wiki/Q133900"/>
        <obo:IAO_0000115 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">e.g. holography</obo:IAO_0000115>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Reference_beam</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">reference beam</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01026 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01026">
        <rdfs:subClassOf rdf:resource="http://purl.obolibrary.org/obo/CHMO_0000182"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01022"/>
        <rdfs:subClassOf rdf:resource="https://www.wikidata.org/wiki/Q133900"/>
        <obo:IAO_0000115 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">essential diffracting structure(s)</obo:IAO_0000115>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">atomic scale diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01027 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01027">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01026"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">atomic scale diffraction 3D volume</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01028 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01028">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01027"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">atomic scale diffraction 3D volume 3D periodic</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01029 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01029">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01028"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">single crystal diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01030 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01030">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01028"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Powder_diffraction</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">powder diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01031 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01031">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01026"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">atomic scale diffraction 2D surface or film</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01032 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01032">
        <rdfs:subClassOf rdf:resource="http://purl.obolibrary.org/obo/CHMO_0000182"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01022"/>
        <rdfs:subClassOf rdf:resource="https://www.wikidata.org/wiki/Q133900"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">micro scale diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01033 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01033">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00200"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Incoherent_scatter</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">incoherent scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01034 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01034">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01033"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Inelastic_scattering</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">inelastic scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01035 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01035">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01034"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Quasielastic_neutron_scattering</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">quasielastic scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01036 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01036">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00200"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">high momentum transfer scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01037 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01037">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00200"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">low momentum transfer scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01038 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01038">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01037"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">ultra low momentum transfer scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01039 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01039">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00200"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">low surface momentum transfer scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01040 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01040">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00200"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">high momentum transfer resolution scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01041 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01041">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00201"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">coherent emission technique</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01042 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01042">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00201"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">high energy resolution emission technique</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01043 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01043">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00201"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">photon emission technique</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01044 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01044">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01043"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">visible photon emission technique</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01045 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01045">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01043"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray emission technique</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01046 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01046">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01043"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">gamma-ray emission technique</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01047 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01047">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00201"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Electron_emission</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">electron emission technique</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01048 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01048">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00201"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">ion emission technique</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01049 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01049">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00200"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00206"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">resonant scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01050 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01050">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00206"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">nuclear resonance</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01051 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01051">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00206"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Muon_spin_spectroscopy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">muon spin resonance</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">MuSR</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01052 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01052">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00206"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Spin_echo</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">spin echo technique</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01053 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01053">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00206"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">electronic excitation</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01054 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01054">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01053"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">atomic core excitation</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01055 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01055">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01053"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">photo excitation</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01056 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01056">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00300"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01125"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">versus incident energy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01057 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01057">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00300"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01125"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">versus emitted energy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01058 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01058">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01057"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">versus emission momentum</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01059 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01059">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00300"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01125"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">versus energy loss</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01060 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01060">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00302"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">versus emitted polarization</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01061 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01061">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00100"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00302"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">versus photon linear polarization</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01062 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01062">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00100"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00302"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">versus photon circular polarization</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01063 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01063">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00304"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">versus time ultrafast</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01064 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01064">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00306"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">versus sample temperature</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01065 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01065">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00306"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">versus sample pressure</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01066 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01066">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00306"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">versus sample magnetic field</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01067 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01067">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00306"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">versus sample electric field</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01068 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01068">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00401"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01106"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">obtain high resolution spatial map</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01069 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01069">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01068"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01106"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Microscopy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">microscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01070 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01070">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01068"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01069"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">obtain ultrahigh resolution spatial map</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01071 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01071">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00401"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01106"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">obtain 3D spatial map</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01072 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01072">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00402"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Density_of_states</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">obtain electronic density of states</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01073 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01073">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01072"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">obtain electronic density of occupied states</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01074 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01074">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01072"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">obtain electronic density of unoccupied states</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01075 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01075">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00402"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Electronic_band_structure</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">obtain electronic band structure</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01076 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01076">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00402"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">obtain atomic tensor properties</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01077 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01077">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01076"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">obtain magnetic vector</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01078 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01078">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01076"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">obtain charge quadrupole</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01079 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01079">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00402"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Magnetic_structure</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">obtain atomic magnetic structure</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01080 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01080">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00402"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">obtain charge density</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01081 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01081">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00402"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">obtain magnetic density</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01082 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01082">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00400"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Crystallography</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">crystallography</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">obtain crystal structure</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01083 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01083">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00400"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Crystal_structure#Atomic_coordination</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">obtain local coordination</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01084 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01084">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00304"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">time dependent study</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">time resolved study</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01085 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01085">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00407"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">characterize electronic excitations</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01086 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01086">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01085"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">characterize magnetic excitations</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01087 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01087">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00407"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">characterize lattice excitations</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01088 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01088">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00202"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00401"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01106"/>
        <obo:IAO_0000115 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Absorption Contrast Imaging</obo:IAO_0000115>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">absorption contrast imaging</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01089 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01089">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01058"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01075"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01269"/>
        <obo:IAO_0000115 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Angle resolved photoemission spectroscopy</obo:IAO_0000115>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Angle-resolved_photoemission_spectroscopy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">angle resolved photoemission spectroscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">ARPES</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01090 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01090">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00100"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00302"/>
        <obo:IAO_0000115 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Any technique that depends essentially on probe polarization</obo:IAO_0000115>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">dichroism</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01091 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01091">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00300"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01090"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01125"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">dichroism spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01092 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01092">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00201"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01057"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">emission spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01093 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01093">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01092"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01269"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Photoemission_spectroscopy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">photoemission spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01094 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01094">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01044"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">fluorescence luminescence</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01095 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01095">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01045"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01056"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01156"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray fluorescence spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01096 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01096">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01043"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01129"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">fluorescence tomography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01097 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01097">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00300"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01046"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01125"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Gamma_spectroscopy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">gamma spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01098 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01098">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01039"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Grazing_incidence_diffraction</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">grazing incidence diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01099 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01099">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01098"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01124"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Grazing-incidence_small-angle_scattering</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">grazing incidence small angle scattering</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">GISAS</skos:altLabel>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">grazing incidence SAS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01100 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01100">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01030"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01217"/>
        <obo:IAO_0000115 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">A neutron powder diffraction technique</obo:IAO_0000115>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">neutron powder diffraction</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">NPD</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01101 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01101">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01030"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray powder diffraction</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">XPD</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01102 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01102">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01029"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray single crystal diffraction</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">SXRD</skos:altLabel>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">single crystal x-ray diffraction</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01103 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01103">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01013"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01156"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01202"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">hard x-ray photoelectron spectroscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">HAXPES</skos:altLabel>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">hard photoelectron spectroscopy</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01104 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01104">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01042"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01057"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01125"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01269"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">high resolution photoelectron spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01105 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01105">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00401"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01025"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01106"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Holography</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">holography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01106 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01106">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00004"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00005"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">imaging</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01107 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01107">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01034"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01124"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">inelastic small angle scatteringng</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">inelastic SAS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01108 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01108">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01034"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01059"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">inelastic scattering spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01109 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01109">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00300"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01005"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01125"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Infrared_spectroscopy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">infrared spectroscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">IR spectroscopy</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01110 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01110">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01069"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01109"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">infrared microspectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01111 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01111">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01044"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Luminescence</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">luminescence</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01112 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01112">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00401"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01043"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01106"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">fluorescence imaging</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01113 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01113">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01069"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01112"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">fluorescence microscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Micro XRF</skos:altLabel>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">microfluorescence</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01114 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01114">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00102"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00304"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00406"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01051"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Muon_spin_spectroscopy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">muon spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01115 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01115">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00300"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01008"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01125"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">optical spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01116 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01116">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00204"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00401"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01106"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Phase-contrast_imaging</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">phase contrast imaging</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01117 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01117">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00301"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00304"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01024"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Dynamic_light_scattering</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">photon correlation spectroscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">PCS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01118 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01118">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00205"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00301"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00302"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">polarised reflectivity</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01119 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01119">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00101"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01052"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">spin echo  scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01120 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01120">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01035"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01119"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">quasielastic neutron spin echo scattering</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">quasi elastic spin echo</skos:altLabel>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">quasielastic spin echo</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01121 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01121">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00205"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00301"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Reflectometry</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">reflectometry</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">reflectivity</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01122 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01122">
        <rdfs:subClassOf rdf:resource="http://purl.obolibrary.org/obo/CHMO_0000182"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01022"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01049"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01054"/>
        <rdfs:subClassOf rdf:resource="https://www.wikidata.org/wiki/Q133900"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">resonant diffraction</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">anomalous diffraction</skos:altLabel>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">anomalous scattering</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01123 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01123">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00104"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00202"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00303"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01069"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">scanning transmission microscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">STM</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01124 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01124">
        <rdfs:subClassOf rdf:resource="http://purl.obolibrary.org/obo/CHMO_0000182"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01022"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01037"/>
        <rdfs:subClassOf rdf:resource="https://www.wikidata.org/wiki/Q133900"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Small-angle_scattering</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">small angle scattering</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">SAS</skos:altLabel>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">small angle diffraction</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01125 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01125">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00004"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Spectroscopy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01126 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01126">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01039"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01119"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">spin echo resolved grazing incidence scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01127 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01127">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01119"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01124"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">spin echo small angle scattering</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">spin echo SANS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01128 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01128">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01031"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">surface diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01129 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01129">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01071"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Tomography</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">tomography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01130 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01130">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00300"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01009"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01125"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">UV VUV spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01131 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01131">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01007"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01091"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">UV and visible circular dichroism spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01132 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01132">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01009"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01192"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">UV circular dichroism</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">UVCD</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01133 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01133">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01038"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01124"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">ultra small angle scattering</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">USAS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01134 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01134">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01036"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">wide angle scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01135 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01135">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00202"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00300"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01125"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">absorption spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01136 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01136">
        <rdfs:subClassOf rdf:resource="http://purl.obolibrary.org/obo/CHMO_0000182"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00401"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01022"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01106"/>
        <rdfs:subClassOf rdf:resource="https://www.wikidata.org/wiki/Q133900"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">diffraction imaging</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">topography</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01137 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01137">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00202"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00207"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01062"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01090"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/X-ray_magnetic_circular_dichroism</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray magnetic circular dichroism</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">XMCD</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01138 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01138">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00202"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01061"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01090"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Linear_dichroism</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">linear dichroism</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">LD</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01139 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01139">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01138"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">natural linear dichroism</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01140 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01140">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01044"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray excited optical luminescence</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">XEOL</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01141 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01141">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00100"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00202"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00207"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01062"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01090"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Magnetic_circular_dichroism</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">magnetic circular dichroism</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">MCD</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01142 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01142">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00100"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00202"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00207"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01061"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">magnetic linear dichroism</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01143 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01143">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00100"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00207"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00302"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00411"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01090"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">magnetochiral dichroism</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">MChD</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01144 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01144">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00100"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00411"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01062"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01090"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">natural circular dichroism</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">NCD</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01145 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01145">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01047"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01069"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Electron_microscope</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">electron microscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">EM</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01146 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01146">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00100"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01145"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Photoemission_electron_microscopy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">photoemission microscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">PEEM</skos:altLabel>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">photoemission electron microscopy</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01147 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01147">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00104"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00303"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00401"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01106"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">scanning probe imaging</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01148 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01148">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01069"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01147"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">scanning probe microscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">scanning microscopy</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01149 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01149">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00205"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00301"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/X-ray_reflectivity</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray reflectivity</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">XRR</skos:altLabel>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray reflectometry</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01150 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01150">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00203"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00204"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00209"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">grating interferometry</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01151 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01151">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00202"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01129"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">absorption tomography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01152 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01152">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00203"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00204"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01129"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">propagation phase contrast tomography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01153 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01153">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01063"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01129"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">ultrafast tomography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01154 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01154">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01070"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01129"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Nanotomography</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">nanotomography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01155 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01155">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00202"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00204"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01154"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">absorption and phase contrast nanotomography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01156 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01156">
        <owl:equivalentClass>
            <owl:Class>
                <owl:intersectionOf rdf:parseType="Collection">
                    <rdf:Description rdf:about="http://purl.org/pan-science/PaNET/PaNET01012"/>
                    <rdf:Description rdf:about="http://purl.org/pan-science/PaNET/PaNET01125"/>
                </owl:intersectionOf>
            </owl:Class>
        </owl:equivalentClass>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00300"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01125"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/X-ray_spectroscopy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01157 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01157">
        <rdfs:subClassOf rdf:resource="http://purl.obolibrary.org/obo/CHMO_0000182"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01022"/>
        <rdfs:subClassOf rdf:resource="https://www.wikidata.org/wiki/Q133900"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">in-situ diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01158 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01158">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01128"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01157"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">in-situ surface diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01159 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01159">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00208"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01030"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">energy dispersive diffraction</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">EDD</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01160 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01160">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01159"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Energy-dispersive_X-ray_diffraction</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">energy dispersive x-ray diffraction</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">EDXRD</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01161 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01161">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01098"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">grazing incidence x-ray diffraction</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">GIXD</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01162 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01162">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01099"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01188"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Grazing-incidence_small-angle_scattering</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">grazing incidence small angle x-ray scattering</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">GISAXS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01163 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01163">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01029"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01065"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">high pressure single crystal diffraction</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Diffraction</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01164 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01164">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01029"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01082"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">macromolecular crystallography</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">MX</skos:altLabel>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">protein crystallography</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01165 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01165">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00300"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01054"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01156"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01164"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Multi-wavelength_anomalous_dispersion</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">multi wavelength anomalous diffraction</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">MAD</skos:altLabel>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">multi wavelength anomalous dispersion</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01166 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01166">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01029"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01055"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01082"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">photo crystallography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01167 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01167">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01041"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01047"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">photoelectron diffraction</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">PhD</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01168 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01168">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01002"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01003"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01082"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01102"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Serial_femtosecond_crystallography</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">serial femtosecond crystallography</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">SFX</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01169 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01169">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00105"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01003"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01082"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01102"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">serial synchrotron crystallography</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">SSX</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01170 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01170">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01054"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01164"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Single-wavelength_anomalous_dispersion</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">single wavelength anomalous diffraction</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">SAD</skos:altLabel>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">single wavelength anomalous dispersion</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01171 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01171">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01029"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">small molecule diffraction</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">chemical crystallography</skos:altLabel>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">small molecule crystallography</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01172 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01172">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01128"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">surface x-ray diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01173 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01173">
        <rdfs:subClassOf rdf:resource="http://purl.obolibrary.org/obo/CHMO_0000182"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00202"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00400"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01022"/>
        <rdfs:subClassOf rdf:resource="https://www.wikidata.org/wiki/Q133900"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/X-ray_standing_waves</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray standing wave</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">XSW</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01174 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01174">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00401"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01024"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01106"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Coherent_diffraction_imaging</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">coherent diffraction imaging</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">CDI</skos:altLabel>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">coherent diffractive imaging</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01175 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01175">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00300"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01005"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01070"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01125"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">infrared nanospectroscopy imaging</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">nano infrared spectroscopy</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01176 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01176">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00401"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01009"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01106"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01144"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">UV circular dichroism imaging</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01177 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01177">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01045"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/X-ray_fluorescence</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray fluorescence</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">XRF</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01178 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01178">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01005"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01069"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Microscopy#Infrared_microscopy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">infrared microscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">IR microscopy</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01179 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01179">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01008"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01069"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Optical_microscope</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">optical microscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01180 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01180">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01069"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/X-ray_microscope</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray microscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01181 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01181">
        <rdfs:subClassOf rdf:resource="http://purl.obolibrary.org/obo/CHMO_0000182"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01022"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01083"/>
        <rdfs:subClassOf rdf:resource="https://www.wikidata.org/wiki/Q133900"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Pair_distribution_function</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">pair distribution function</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">PDF</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01182 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01182">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01034"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/X-ray_scattering_techniques#Inelastic_X-ray_scattering_(IXS)</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">inelastic x-ray scattering</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">IXS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01183 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01183">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01049"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01054"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01182"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Resonant_inelastic_X-ray_scattering</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">resonant inelastic x-ray scattering</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">RIXS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01184 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01184">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00200"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01185 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01185">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00200"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01008"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">light scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01186 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01186">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01049"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01054"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01184"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">resonant x-ray scattering</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">RXS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01187 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01187">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01015"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01049"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01186"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">resonant soft x-ray scattering</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">RSXS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01188 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01188">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01124"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Small-angle_X-ray_scattering</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">small angle x-ray scattering</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">SAXS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01189 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01189">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01124"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01217"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Small-angle_neutron_scattering</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">small angle neutron scattering</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">SANS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01190 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01190">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01026"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01181"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">total scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01191 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01191">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01026"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01036"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">wide angle x-ray scattering</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">WAXS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01192 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01192">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01062"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01090"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Circular_dichroism</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">circular dichroism</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">CD</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01193 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01193">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00208"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01054"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01125"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01156"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Energy-dispersive_X-ray_spectroscopy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">energy dispersive x-ray spectroscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">EDX</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01194 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01194">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00106"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00300"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01125"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">microfocus spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01195 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01195">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00100"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01034"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Raman_spectroscopy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">raman spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01196 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01196">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01054"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01135"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01156"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/X-ray_absorption_spectroscopy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray absorption spectroscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">XAS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01197 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01197">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01054"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01196"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/X-ray_absorption_fine_structure</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray absorption fine structure</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">XAFS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01198 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01198">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01083"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01197"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Extended_X-ray_absorption_fine_structure</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">extended x-ray absorption fine structure</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">EXAFS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01199 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01199">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00402"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01197"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/X-ray_absorption_near_edge_structure</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray absorption near edge structure</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">NEXAFS</skos:altLabel>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">XANES</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01200 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01200">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01034"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01043"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01125"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01156"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/X-ray_emission_spectroscopy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray emission spectroscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">XES</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01201 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01201">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00300"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01047"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01125"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Electron_spectroscopy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">electron spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01202 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01202">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00100"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01073"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01201"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Photoemission_spectroscopy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">photoelectron spectroscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">PES</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01203 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01203">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01060"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01202"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">spin resolved photoelectron spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01204 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01204">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01156"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01202"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/X-ray_photoelectron_spectroscopy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray photoelectron spectroscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">XPS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01205 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01205">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01117"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/X-ray_Photon_Correlation_Spectroscopy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray photon correlation spectroscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">XPCS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01206 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01206">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01068"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01129"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">microtomography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01207 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01207">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01129"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/CT_scan</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray tomography</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">CT scan</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01208 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01208">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01206"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Talk:X-ray_microtomography</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray microtomography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01209 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01209">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00202"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01206"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">absorption microtomography</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Absorption-based tomographic microscopy</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01210 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01210">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01069"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01152"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">propagation phase contrast microtomography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01211 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01211">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01068"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01153"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">ultrafast microtomography</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Ultra-fast tomographic microscopy</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01212 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01212">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00104"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01174"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Ptychography</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">ptychography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01213 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01213">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01154"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01212"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">ptychographic nanotomography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01214 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01214">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00409"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">instrumentation testing</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01215 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01215">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01214"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">optics characterization</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01216 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01216">
        <rdfs:subClassOf rdf:resource="http://purl.obolibrary.org/obo/CHMO_0000182"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01022"/>
        <rdfs:subClassOf rdf:resource="https://www.wikidata.org/wiki/Q133900"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray diffraction</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">XRD</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01217 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01217">
        <rdfs:subClassOf rdf:resource="http://purl.obolibrary.org/obo/CHMO_0000182"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00101"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01022"/>
        <rdfs:subClassOf rdf:resource="https://www.wikidata.org/wiki/Q133900"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Neutron_diffraction</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">neutron diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01218 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01218">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01204"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">ambient pressure x-ray photoelectron spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01219 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01219">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01123"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Scanning_transmission_X-ray_microscopy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">scanning transmission x-ray microscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">STXM</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01220 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01220">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01047"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">total electron yield</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">TEY</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01221 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01221">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01137"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01220"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">XMCD total electron yield</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">XMCD TEY</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01222 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01222">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01060"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01089"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">spin and angle resolved photoemission spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01223 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01223">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00408"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Lithography</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">lithography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01224 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01224">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01223"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/X-ray_lithography</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray lithography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01225 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01225">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01011"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01223"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">EUV lithography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01226 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01226">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00209"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray interference lithography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01227 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01227">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00202"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray absorption</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01228 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01228">
        <rdfs:subClassOf rdf:resource="http://purl.obolibrary.org/obo/CHMO_0000182"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01022"/>
        <rdfs:subClassOf rdf:resource="https://www.wikidata.org/wiki/Q133900"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">nonresonant diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01229 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01229">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00211"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01156"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">nonlinear x-ray spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01230 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01230">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00401"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01003"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01106"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">single-shot imaging</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01231 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01231">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01223"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Nanoimprint_lithography</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">nanoimprint lithography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01232 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01232">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01223"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">grayscale lithography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01233 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01233">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00408"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">polymer micro and nanografting</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01234 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01234">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01040"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01100"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">high resolution neutron powder diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01235 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01235">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01016"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01234"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">high resolution thermal neutron powder diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01236 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01236">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00101"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01029"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">neutron single crystal diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01237 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01237">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01016"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01236"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">thermal neutron single crystal diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01238 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01238">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01002"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01205"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">pulse overlap diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01239 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01239">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00101"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01121"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Neutron_reflectometry</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">neutron reflectometry</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">neutron reflectivity</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01240 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01240">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00101"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01133"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">ultra small angle neutron scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01241 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01241">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01133"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">ultra small angle x-ray scattering</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">USAXS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01242 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01242">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00101"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00200"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Neutron_scattering</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">neutron scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01243 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01243">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00302"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01239"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">polarized neutron reflectometry</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">polarized neutron reflectivity</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01244 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01244">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00300"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01001"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01125"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">time-of-flight spectrometry</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">TOF spectrometry</skos:altLabel>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">TOF spectroscopy</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01245 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01245">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00101"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00300"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01034"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01125"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">Neutron spectroscopy - Wikipedia</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">inelastic neutron spectroscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">inelastic neutron scattering</skos:altLabel>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">inelastic neutron scattering spectroscopy</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01246 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01246">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01017"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01245"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">cold neutron spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01247 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01247">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01016"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01245"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">thermal neutron spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01248 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01248">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00101"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00202"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00401"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01106"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">neutron transmission radiography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01249 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01249">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00401"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01017"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01106"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">cold neutron imaging</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01250 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01250">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00101"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01068"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01106"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">high-resolution neutron imaging </rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01251 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01251">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00104"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01006"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01069"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">THz near field microscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01252 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01252">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00200"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00207"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">magnetic scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01253 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01253">
        <rdfs:subClassOf rdf:resource="http://purl.obolibrary.org/obo/CHMO_0000182"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00207"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01022"/>
        <rdfs:subClassOf rdf:resource="https://www.wikidata.org/wiki/Q133900"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">magnetic diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01254 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01254">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00106"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01045"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">microfocus x-ray fluorescence</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01255 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01255">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00100"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00205"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01060"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Ellipsometry</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">ellipsometry</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01256 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01256">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01060"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">polarimetry</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01257 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01257">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01009"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01269"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">UV photoelectron emission</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01258 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01258">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01269"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray photoelectron emission</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01259 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01259">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01142"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray magnetic linear dichroism</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">XMLD</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01260 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01260">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01020"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01049"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01186"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">resonant elastic x-ray scattering</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">REXS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01261 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01261">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00204"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00401"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01106"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray refraction imaging</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray refraction radiography</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01262 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01262">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01152"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray refraction tomography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01263 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01263">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00200"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01084"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">time dependent scattering</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">time resolved scattering</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01264 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01264">
        <rdfs:subClassOf rdf:resource="http://purl.obolibrary.org/obo/CHMO_0000182"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01022"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01263"/>
        <rdfs:subClassOf rdf:resource="https://www.wikidata.org/wiki/Q133900"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">time dependent diffraction</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">time resolved diffraction</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01265 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01265">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00202"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01084"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">time dependent absorption</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">time resolved absorption</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01266 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01266">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01105"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray holography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01267 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01267">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00100"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01048"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01058"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">ion imaging</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01268 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01268">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00305"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Mass_spectrometry</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">mass spectrometry</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01269 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01269">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00100"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01047"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Photoelectric_effect</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">photoelectron emission</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01270 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01270">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01049"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01050"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">nuclear resonant scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01271 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01271">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00106"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01184"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">microfocus x-ray scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01272 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01272">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01004"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01271"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">nanofocus x-ray scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01273 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01273">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01034"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01124"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">small angle inelastic scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01274 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01274">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01122"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01124"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">anomalous small angle x-ray scattering</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">ASAXS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01275 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01275">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01274"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">anomalous solution x-ray scattering</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">ASAX</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01276 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01276">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01099"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01189"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Grazing-incidence_small-angle_scattering</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">grazing incidence small angle neutron scattering</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">GISANS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01277 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01277">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01000"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01189"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">time of flight small angle neutron scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01278 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01278">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01133"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01189"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">very small angle neutron scattering</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">VSANS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01279 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01279">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01021"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01124"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">diffuse small angle scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01280 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01280">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01279"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">diffuse small angle x-ray scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01281 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01281">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01182"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01188"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01273"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">inelastic x-ray small angle scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01282 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01282">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01015"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01188"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">soft x-ray small angle scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01283 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01283">
        <rdfs:subClassOf rdf:resource="http://purl.obolibrary.org/obo/CHMO_0000182"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01015"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01022"/>
        <rdfs:subClassOf rdf:resource="https://www.wikidata.org/wiki/Q133900"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">soft x-ray diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01284 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01284">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01167"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray photoelectron diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01285 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01285">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00401"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01106"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Radiography</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray imaging</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01286 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01286">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01162"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01206"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">micro small angle x-ray scattering tomography</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">micro SAXS tomography</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01287 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01287">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01162"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01286"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">micro grazing incidence small angle x-ray scattering tomography</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">micro GISAXS tomography</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01288 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01288">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01147"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01177"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">scanning x-ray fluorescence</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01289 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01289">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01285"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">soft x-ray imaging</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01290 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01290">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01136"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray diffraction imaging</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01291 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01291">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01089"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01148"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">scanning angle resolved photoemission spectromicroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01292 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01292">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01004"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01291"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">nano angle resolved photoemission spectroscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">nano ARPES</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01293 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01293">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00104"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01146"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">scanning photoelectron microscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01294 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01294">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01146"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray photoemission microscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01295 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01295">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00104"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01180"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray scanning microscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">scanning x-ray microscopy</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01296 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01296">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01054"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01104"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">high resolution core-level photoemission spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01297 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01297">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01104"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01204"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">high resolution x-ray photoelectron spectroscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">HR-XPS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01298 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01298">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00101"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00300"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00403"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01020"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01125"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">elastic neutron scattering spectroscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">RENS</skos:altLabel>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">resolution elastic neutron scattering</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01299 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01299">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01042"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01245"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">high resolution inelastic neutron scattering</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01300 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01300">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01138"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray linear dichroism</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01301 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01301">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01143"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray magnetochiral dichroism</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">XMChiD</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01302 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01302">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01144"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray natural circular dichroism</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">XNCD</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01303 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01303">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01139"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray natural linear dichroism</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">XNLD</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01304 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01304">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00405"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01164"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Fragment-based_lead_discovery</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">fragment screening</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">crystallographic fragment screening</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01305 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01305">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01014"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01164"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">long wavelength crystallography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01306 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01306">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01164"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01271"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">microfocus macromolecular crystallography</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">microfocus MX</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01307 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01307">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01164"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01272"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">nanofocus macromolecular crystallography</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">nanofocus MX</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01308 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01308">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01164"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Molecular_replacement</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">molecular replacement</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">MR</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01309 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01309">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01168"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01264"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">time resolved serial femtosecond crystallography</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">TR-SFX</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01310 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01310">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01169"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">fixed target serial synchrotron crystallography</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">FT-SSX</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01311 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01311">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01164"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01169"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">lipidic cubic phase serial synchrotron crystallography</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">LCP-SSX</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01312 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01312">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01169"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01264"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">time resolved serial synchrotron crystallography</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">TR-SSX</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01313 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01313">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00207"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01207"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">magnetic x-ray tomography</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01314 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01314">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01179"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01180"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">correlative light x-ray microscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">CLXM</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01315 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01315">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01180"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">cryo x-ray microscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01316 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01316">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01098"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01191"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">grazing incidence wide angle scattering</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">GIWAXS</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01317 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01317">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01089"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01104"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">high resolution angle resolved photoemission spectroscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">HR-ARPES</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01318 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01318">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00103"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00104"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00210"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01069"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Atomic_force_microscopy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">atomic force microscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">AFM</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01319 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01319">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01109"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01318"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/AFM-IR</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">atomic force microscope infrared spectroscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">AFM-IR</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01320 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01320">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00209"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01109"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Fourier-transform_infrared_spectroscopy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">fourier transform infrared spectroscopy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">FTIR</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01321 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01321">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01193"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01198"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">energy dispersive extended x-ray absorption fine structure</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">ED-EXAFS</skos:altLabel>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">EDE</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01322 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01322">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00106"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01196"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">microfocus x-ray absorption spectroscopy</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01323 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01323">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00404"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Radiation_therapy</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">radiotherapy</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">radiation therapy</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01324 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01324">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00400"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">surface crystallography</rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">obtain surface atomic structure</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01325 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01325">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01023"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01029"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01173"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/Borrmann_effect</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">borrmann effect</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01326 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01326">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00204"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01061"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">birefringence</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01327 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01327">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET00401"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01106"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01300"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01326"/>
        <obo:IAO_0000119 rdf:datatype="http://www.w3.org/2001/XMLSchema#string">https://en.wikipedia.org/wiki/X-ray_birefringence_imaging</obo:IAO_0000119>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">x-ray birefringence imaging </rdfs:label>
        <skos:altLabel rdf:datatype="http://www.w3.org/2001/XMLSchema#string">XBI</skos:altLabel>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01328 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01328">
        <rdfs:subClassOf rdf:resource="http://purl.obolibrary.org/obo/CHMO_0000182"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01022"/>
        <rdfs:subClassOf rdf:resource="https://www.wikidata.org/wiki/Q133900"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">divergent beam diffraction</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01329 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01329">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01177"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01328"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">kossel lines</rdfs:label>
    </owl:Class>
    


    <!-- http://purl.org/pan-science/PaNET/PaNET01330 -->

    <owl:Class rdf:about="http://purl.org/pan-science/PaNET/PaNET01330">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01021"/>
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01328"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">diffuse multiple scattering</rdfs:label>
    </owl:Class>
    


    <!-- https://www.wikidata.org/wiki/Q133900 -->

    <owl:Class rdf:about="https://www.wikidata.org/wiki/Q133900">
        <rdfs:subClassOf rdf:resource="http://purl.org/pan-science/PaNET/PaNET01020"/>
    </owl:Class>
    


    <!-- 
    ///////////////////////////////////////////////////////////////////////////////////////
    //
    // Individuals
    //
    ///////////////////////////////////////////////////////////////////////////////////////
     -->

    


    <!-- PaNET:myARPEStechnique -->

    <owl:NamedIndividual rdf:about="PaNET:myARPEStechnique">
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00001"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00002"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00003"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00004"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00005"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00100"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00201"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00300"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00402"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01047"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01057"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01058"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01075"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01089"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01125"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01269"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">myARPEStechnique</rdfs:label>
    </owl:NamedIndividual>
    


    <!-- PaNET:myHighResNeutronPowderDiffractionTechnique -->

    <owl:NamedIndividual rdf:about="PaNET:myHighResNeutronPowderDiffractionTechnique">
        <rdf:type rdf:resource="http://purl.obolibrary.org/obo/CHMO_0000182"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00001"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00002"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00003"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00101"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00200"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01020"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01022"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01026"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01027"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01028"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01030"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01040"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01100"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01217"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01234"/>
        <rdf:type rdf:resource="https://www.wikidata.org/wiki/Q133900"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">myHighResNeutronPowderDiffractionTechnique</rdfs:label>
    </owl:NamedIndividual>
    


    <!-- PaNET:myMicrofocusX-rayAbsorptionSpectroscopyTechnique -->

    <owl:NamedIndividual rdf:about="PaNET:myMicrofocusX-rayAbsorptionSpectroscopyTechnique">
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00001"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00002"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00003"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00004"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00100"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00106"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00202"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00206"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00300"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01012"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01053"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01054"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01125"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01135"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01156"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01196"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01322"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">myMicrofocusX-rayAbsorptionSpectroscopyTechnique</rdfs:label>
    </owl:NamedIndividual>
    


    <!-- PaNET:mySingleCrystalDiffractionTechnique -->

    <owl:NamedIndividual rdf:about="PaNET:mySingleCrystalDiffractionTechnique">
        <rdf:type rdf:resource="http://purl.obolibrary.org/obo/CHMO_0000182"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00001"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00003"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET00200"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01020"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01022"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01026"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01027"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01028"/>
        <rdf:type rdf:resource="http://purl.org/pan-science/PaNET/PaNET01029"/>
        <rdf:type rdf:resource="https://www.wikidata.org/wiki/Q133900"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">mySingleCrystalDiffractionTechnique</rdfs:label>
    </owl:NamedIndividual>
    


    <!-- PaNET:my_ARPES_data -->

    <owl:NamedIndividual rdf:about="PaNET:my_ARPES_data">
        <rdf:type rdf:resource="PaNET:dataset"/>
        <PaNET:hasTechnique rdf:resource="PaNET:myARPEStechnique"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">my_ARPES_data</rdfs:label>
    </owl:NamedIndividual>
    


    <!-- PaNET:my_microfocus_spectrosopy_data -->

    <owl:NamedIndividual rdf:about="PaNET:my_microfocus_spectrosopy_data">
        <rdf:type rdf:resource="PaNET:dataset"/>
        <PaNET:hasTechnique rdf:resource="PaNET:myMicrofocusX-rayAbsorptionSpectroscopyTechnique"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">my_microfocus_spectrosopy_data</rdfs:label>
    </owl:NamedIndividual>
    


    <!-- PaNET:my_neutron_powder_diffraction_diffraction_data_55 -->

    <owl:NamedIndividual rdf:about="PaNET:my_neutron_powder_diffraction_diffraction_data_55">
        <rdf:type rdf:resource="PaNET:dataset"/>
        <PaNET:hasTechnique rdf:resource="PaNET:myHighResNeutronPowderDiffractionTechnique"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">my_neutron_powder_diffraction_diffraction_data_55</rdfs:label>
    </owl:NamedIndividual>
    


    <!-- PaNET:my_single_crystal_x-ray_diffraction_data_123 -->

    <owl:NamedIndividual rdf:about="PaNET:my_single_crystal_x-ray_diffraction_data_123">
        <rdf:type rdf:resource="PaNET:dataset"/>
        <PaNET:hasTechnique rdf:resource="PaNET:mySingleCrystalDiffractionTechnique"/>
        <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">my_single_crystal_x-ray_diffraction_data_123</rdfs:label>
    </owl:NamedIndividual>
</rdf:RDF>



<!-- Generated by the OWL API (version 4.5.9.2019-02-01T07:24:44Z) https://github.com/owlcs/owlapi -->`,
};
